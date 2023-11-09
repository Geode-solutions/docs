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

# class SolidSwapAlongPatch


## Records

OppositeVertexStatus



## Functions

### SolidSwapAlongPatch

```cpp
public void SolidSwapAlongPatch(const SolidSwapAlongPatch & )
```


### operator=

```cpp
public SolidSwapAlongPatch & operator=(const SolidSwapAlongPatch & )
```


### SolidSwapAlongPatch

```cpp
public void SolidSwapAlongPatch(SolidSwapAlongPatch && )
```


### operator=

```cpp
public SolidSwapAlongPatch & operator=(SolidSwapAlongPatch && )
```


### SolidSwapAlongPatch

```cpp
public void SolidSwapAlongPatch(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, Span patch_vertices, const Triangle3D & macro_triangle)
```


### ~SolidSwapAlongPatch

```cpp
public void ~SolidSwapAlongPatch()
```


### swap

```cpp
public SolidSwapPatchInfo swap()
```


### swap_edge_apex

```cpp
public absl::optional<index_t> swap_edge_apex(const PolyhedronFacetEdge & edge)
```




