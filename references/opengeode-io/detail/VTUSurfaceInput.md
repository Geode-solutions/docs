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

# class VTUSurfaceInput


```cpp
Inherits from VTUInputImpl<Mesh>
```



## Functions

### VTUSurfaceInput

```cpp
protected void VTUSurfaceInput<Mesh>(basic_string_view filename, const geode::MeshImpl & impl)
```


### enable_triangle

```cpp
protected void enable_triangle()
```


### enable_quad

```cpp
protected void enable_quad()
```




