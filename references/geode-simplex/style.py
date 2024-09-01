<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# -*- coding: utf-8 -*-
import sys
import os

try:
    from StringIO import StringIO
except ImportError:
    from io import StringIO

LIST_MARKERS = ("* ", "- ", "+ ")


def bake_bucket(output, bucket, directory):
    for item in sorted(bucket):
        filename = item[item.find("(") + 1 : item.find(")")]
        file = os.path.join(directory, filename)
        if os.path.exists(file):
            output.write(item)


def sort(stream, output, directory):
    buckets = set()

    output.write("<script setup>\n")
    output.write("import {useRoute} from 'vitepress'\n")
    output.write("const {path} = useRoute()\n")
    output.write("const tokens = path.split('/')\n")
    output.write("const words = tokens[2].split('-');\n")
    output.write("for (let i = 0; i < words.length; i++) {\n")
    output.write(
        "    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);\n"
    )
    output.write("    words[i] = words[i].replace('geode', 'Geode')\n")
    output.write("}\n")
    output.write("const name = words.join('-');\n")
    output.write("</script>\n")
    output.write("# Project {{ name }}\n\n")

    for line in stream:
        stripped = line.lstrip()

        if not stripped:
            if buckets:
                bake_bucket(output, buckets, directory)
                buckets.clear()
            output.write(line)
            continue
        stripped = stripped.replace("_Bool", "bool")
        if stripped[:2] in LIST_MARKERS:
            buckets.add(line)
        elif stripped[:11] == "*Defined at":
            continue
        elif stripped[0] == "*" and stripped[-2] == "*":
            output.write("```cpp\n")
            output.write(stripped[1:-2])
            output.write("\n```\n")
        elif stripped[:7] == "public " or stripped[:10] == "protected ":
            output.write("```cpp\n")
            output.write(stripped)
            output.write("\n```\n")
        elif stripped[0] == "#" and "<" in stripped and ">" in stripped:
            output.write(stripped.split("<", 1)[0])
            output.write("\n")
        elif stripped[:13] == "Inherits from":
            output.write("```cpp\n")
            output.write(line)
            output.write("```\n")
        else:
            output.write(line)

    # for remains
    if buckets:
        bake_bucket(output, buckets, directory)


def sort_string(directory, string):
    stream = StringIO(string)
    output = StringIO()
    sort(stream, output, directory)
    return output.getvalue()


def rewrite_file(directory, filename):
    input = open(filename, "r")
    source = input.read()
    result = sort_string(directory, source)
    input.close()
    with open(input.name, "w", encoding=input.encoding) as output:
        output.write(result)


def clean_directory(directory):
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        if os.path.isdir(f):
            clean_directory(f)
            continue
        if filename == "Impl.md":
            os.remove(f)
            continue
        file = open(f, "r")
        if len(file.readlines()) < 3:
            os.remove(f)
            continue


def process_directory(directory):
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        if os.path.isdir(f):
            process_directory(f)
            continue
        rewrite_file(directory, f)


if __name__ == "__main__":
    args = sys.argv[1:]
    print(args)
    clean_directory(args[0])
    process_directory(args[0])
