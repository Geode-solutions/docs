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

# class OpenGeodeImplicitCrossSectionInput


```cpp
Inherits from ImplicitCrossSectionInput
```



## Functions

### OpenGeodeImplicitCrossSectionInput

```cpp
public void OpenGeodeImplicitCrossSectionInput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### load_implicit_cross_section_files

```cpp
public void load_implicit_cross_section_files(ImplicitCrossSection & section, basic_string_view directory)
```


### read

```cpp
public ImplicitCrossSection read()
```




