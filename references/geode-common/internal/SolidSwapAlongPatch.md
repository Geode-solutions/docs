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
public void SolidSwapAlongPatch(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, absl::Span<const index_t> patch_vertices, const Triangle3D & macro_triangle)
```


### SolidSwapAlongPatch

```cpp
public void SolidSwapAlongPatch(const SolidSwapAlongPatch & )
```


### SolidSwapAlongPatch

```cpp
public void SolidSwapAlongPatch(SolidSwapAlongPatch && )
```


### operator=

```cpp
public SolidSwapAlongPatch & operator=(const SolidSwapAlongPatch & )
```


### operator=

```cpp
public SolidSwapAlongPatch & operator=(SolidSwapAlongPatch && )
```


### swap

```cpp
public SolidSwapPatchInfo swap()
```


### ~SolidSwapAlongPatch

```cpp
public void ~SolidSwapAlongPatch()
```




