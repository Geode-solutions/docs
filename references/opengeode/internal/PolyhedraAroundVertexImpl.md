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

# struct PolyhedraAroundVertexImpl


## Members

```cpp
public InlinedVector polyhedra

```

```cpp
public bool vertex_is_on_border

```



## Functions

### PolyhedraAroundVertexImpl

```cpp
public void PolyhedraAroundVertexImpl()
```


### PolyhedraAroundVertexImpl

```cpp
public void PolyhedraAroundVertexImpl(InlinedVector polyhedra_in, bool vertex_is_on_border_in)
```


### operator!=

```cpp
public bool operator!=(const PolyhedraAroundVertexImpl & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```




