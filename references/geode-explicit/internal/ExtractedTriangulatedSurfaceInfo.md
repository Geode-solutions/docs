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

# struct ExtractedTriangulatedSurfaceInfo


```cpp
Inherits from ExtractedMeshInfo<TriangulatedSurface3D>
```



## Members

```cpp
public shared_ptr polygon_origin

```

```cpp
public shared_ptr macro_facets

```

```cpp
public shared_ptr edge_components

```

```cpp
public shared_ptr edge_incident_components

```



## Functions

### ExtractedTriangulatedSurfaceInfo

```cpp
public void ExtractedTriangulatedSurfaceInfo()
```


### enable_edge_attributes

```cpp
public void enable_edge_attributes()
```




