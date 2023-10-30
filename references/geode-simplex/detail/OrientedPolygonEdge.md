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

# struct OrientedPolygonEdge


## Members

```cpp
public PolygonEdge edge

```

```cpp
public bool oriented

```



## Functions

### OrientedPolygonEdge

```cpp
public void OrientedPolygonEdge(PolygonEdge edge_in, bool oriented_in)
```


### next_vertex

```cpp
public index_t next_vertex(const TriangulatedSurface<dimension> & surface)
```


### vertex

```cpp
public index_t vertex(const TriangulatedSurface<dimension> & surface)
```




