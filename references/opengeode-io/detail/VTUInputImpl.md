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

# class VTUInputImpl


```cpp
Inherits from VTKMeshInputImpl<Mesh>
```



## Functions

### VTUInputImpl

```cpp
public void VTUInputImpl<Mesh>(string_view filename, Mesh & solid)
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




