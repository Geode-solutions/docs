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

# class VTUSolidInput


```cpp
Inherits from VTUInputImpl<Mesh>
```



## Functions

### VTUSolidInput

```cpp
protected void VTUSolidInput<Mesh>(basic_string_view filename, const geode::MeshImpl & impl)
```


### enable_tetrahedron

```cpp
protected void enable_tetrahedron()
```


### enable_hexahedron

```cpp
protected void enable_hexahedron()
```


### enable_prism

```cpp
protected void enable_prism()
```


### enable_pyramid

```cpp
protected void enable_pyramid()
```




