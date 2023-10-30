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

# class PropagateAlongSurfaceMacroEdge


```cpp
Inherits from SurfaceSegmentFinder<dimension>
```



## Functions

### along_segment

```cpp
public absl::optional<Cuts> along_segment()
```


### ~PropagateAlongSurfaceMacroEdge

```cpp
public void ~PropagateAlongSurfaceMacroEdge<dimension>()
```


### PropagateAlongSurfaceMacroEdge

```cpp
protected void PropagateAlongSurfaceMacroEdge<dimension>(const FrontalRemesher<dimension> & remesher, index_t begin, index_t end)
```


### remesher

```cpp
protected const FrontalRemesher<dimension> & remesher()
```




# class PropagateAlongSurfaceMacroEdge


```cpp
Inherits from SurfaceSegmentFinder<2U>
```



# class PropagateAlongSurfaceMacroEdge


```cpp
Inherits from SurfaceSegmentFinder<3U>
```



