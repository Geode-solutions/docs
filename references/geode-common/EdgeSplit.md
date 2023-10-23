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
public Point3D location

```

```cpp
public PolyhedronFacetEdge edge

```



## Functions

### EdgeSplit

```cpp
public void EdgeSplit(Point3D location_in, PolyhedronFacetEdge edge_in)
```


### EdgeSplit

```cpp
public void EdgeSplit()
```




