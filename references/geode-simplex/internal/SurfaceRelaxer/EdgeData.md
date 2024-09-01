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

# struct EdgeData


## Members

```cpp
public PolygonEdge id

```

```cpp
public index_t vertex

```

```cpp
public const Point<dimension> & point

```

```cpp
public optional adj

```



## Functions

### EdgeData

```cpp
public void EdgeData(const SurfaceMesh<dimension> & mesh, PolygonEdge edge_in)
```




