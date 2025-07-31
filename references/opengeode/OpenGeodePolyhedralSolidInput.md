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

# class OpenGeodePolyhedralSolidInput


```cpp
Inherits from PolyhedralSolidInput<dimension>
```



## Functions

### OpenGeodePolyhedralSolidInput

```cpp
public void OpenGeodePolyhedralSolidInput<dimension>(basic_string_view filename)
```


### additional_files

```cpp
public typename PolyhedralSolidInput<dimension>::AdditionalFiles additional_files()
```


### object_priority

```cpp
public index_t object_priority()
```


### read

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > read(const MeshImpl & impl)
```




