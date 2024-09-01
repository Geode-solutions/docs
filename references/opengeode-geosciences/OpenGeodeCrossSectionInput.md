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

# class OpenGeodeCrossSectionInput


```cpp
Inherits from CrossSectionInput
```



## Functions

### OpenGeodeCrossSectionInput

```cpp
public void OpenGeodeCrossSectionInput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### load_cross_section_files

```cpp
public void load_cross_section_files(CrossSection & cross_section, basic_string_view directory)
```


### read

```cpp
public CrossSection read()
```




