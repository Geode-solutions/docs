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

# class OpenGeodeImplicitCrossSectionOutput


```cpp
Inherits from ImplicitCrossSectionOutput
```



## Functions

### OpenGeodeImplicitCrossSectionOutput

```cpp
public void OpenGeodeImplicitCrossSectionOutput(std::string_view filename)
```


### archive_implicit_section_files

```cpp
public void archive_implicit_section_files(const ZipFile & zip_writer)
```


### extension

```cpp
public static std::string_view extension()
```


### save_implicit_section_files

```cpp
public void save_implicit_section_files(const ImplicitCrossSection & implicit_section, std::string_view directory)
```


### write

```cpp
public std::vector<std::string> write(const ImplicitCrossSection & implicit_section)
```




