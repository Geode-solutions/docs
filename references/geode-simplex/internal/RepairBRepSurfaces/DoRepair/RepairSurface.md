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

# struct RepairSurface


## Members

```cpp
public const Surface3D & surface

```

```cpp
public const TriangulatedSurface3D & mesh

```

```cpp
public DistanceToTriangle distance

```

```cpp
public vector edges

```



## Functions

### RepairSurface

```cpp
public void RepairSurface(RepairBRepSurfaces & repair, const Surface3D & surface_in)
```




