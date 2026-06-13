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

# class VOInput


```cpp
Inherits from RegularGridInput<3>
```



## Functions

### VOInput

```cpp
public void VOInput(std::string_view filename)
```


### extension

```cpp
public static std::string_view extension()
```


### object_priority

```cpp
public index_t object_priority()
```


### read

```cpp
public std::unique_ptr<RegularGrid3D> read(const MeshImpl & impl)
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### is_loadable

```cpp
public Percentage is_loadable()
```




