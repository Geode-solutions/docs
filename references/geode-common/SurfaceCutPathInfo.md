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

# struct SurfaceCutPathInfo


## Members

```cpp
public vector vertices

```

```cpp
public vector triangles

```

```cpp
public std::vector<PolygonEdgeMultiMapping> modified

```

```cpp
public std::vector<PolygonEdgeMultiMapping> left_along_path

```

```cpp
public std::vector<PolygonEdgeMultiMapping> right_along_path

```

```cpp
public vector small_egdes

```



