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

# class OpenGeodeSectionInput


```cpp
Inherits from SectionInput
```



## Functions

### OpenGeodeSectionInput

```cpp
public void OpenGeodeSectionInput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### read

```cpp
public Section read()
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### object_priority

```cpp
public index_t object_priority()
```




