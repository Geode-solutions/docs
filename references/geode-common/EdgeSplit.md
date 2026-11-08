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

# struct EdgeSplit


## Members

```cpp
public Point location

```

```cpp
public PolyhedronFacetEdge edge

```

```cpp
public array vertices

```



## Functions

### EdgeSplit

```cpp
public void EdgeSplit(Point3D location_in, PolyhedronFacetEdge edge_in, std::array<index_t, 2> vertices_in)
```


### EdgeSplit

```cpp
public void EdgeSplit()
```




