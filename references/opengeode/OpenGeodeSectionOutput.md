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

# class OpenGeodeSectionOutput


```cpp
Inherits from SectionOutput
```



## Functions

### save_section_files

```cpp
public void save_section_files(const Section & section, std::string_view directory)
```


### OpenGeodeSectionOutput

```cpp
public void OpenGeodeSectionOutput(std::string_view filename)
```


### extension

```cpp
public static std::string_view extension()
```


### archive_section_files

```cpp
public void archive_section_files(const ZipFile & zip_writer)
```


### write

```cpp
public std::vector<std::string> write(const Section & section)
```




