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

# struct PolygonsAroundVertexImpl


## Members

```cpp
public InlinedVector polygons

```

```cpp
public bool vertex_is_on_border

```



## Functions

### PolygonsAroundVertexImpl

```cpp
public void PolygonsAroundVertexImpl()
```


### PolygonsAroundVertexImpl

```cpp
public void PolygonsAroundVertexImpl(InlinedVector polygons_in, bool vertex_is_on_border_in)
```


### operator!=

```cpp
public bool operator!=(const PolygonsAroundVertexImpl & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```




