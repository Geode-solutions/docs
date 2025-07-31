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

# class OpenGeodeLightRegularGridInput


```cpp
Inherits from LightRegularGridInput<dimension>
```



## Functions

### OpenGeodeLightRegularGridInput

```cpp
public void OpenGeodeLightRegularGridInput<dimension>(basic_string_view filename)
```


### read

```cpp
protected LightRegularGrid<dimension> read()
```


### additional_files

```cpp
protected typename LightRegularGridInput<dimension>::AdditionalFiles additional_files()
```


### object_priority

```cpp
protected index_t object_priority()
```




