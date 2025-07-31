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

# class GEOTIFFInput


```cpp
Inherits from LightRegularGridInput2D
```



## Functions

### GEOTIFFInput

```cpp
public void GEOTIFFInput(basic_string_view filename)
```


### extensions

```cpp
public vector extensions()
```


### read

```cpp
public LightRegularGrid read()
```


### is_loadable

```cpp
public bool is_loadable()
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### object_priority

```cpp
public index_t object_priority()
```




