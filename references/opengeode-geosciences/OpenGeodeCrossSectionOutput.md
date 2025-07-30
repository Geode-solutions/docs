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

# class OpenGeodeCrossSectionOutput


```cpp
Inherits from CrossSectionOutput
```



## Functions

### OpenGeodeCrossSectionOutput

```cpp
public void OpenGeodeCrossSectionOutput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### save_cross_section_files

```cpp
public void save_cross_section_files(const CrossSection & cross_section, basic_string_view directory)
```


### archive_cross_section_files

```cpp
public void archive_cross_section_files(const ZipFile & zip_writer)
```


### write

```cpp
public std::vector<std::string> write(const CrossSection & cross_section)
```




