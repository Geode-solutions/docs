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

# class PropagateAlongPlane


 Walks along a plane on the model boundary surfaces. The walk crosses border edges into the adjacent model boundary surface, unless the border edge is shared with a horizon, a fault, a top or a bottom surface: then the walk stops on this edge.



## Functions

### PropagateAlongPlane

```cpp
public void PropagateAlongPlane(const StructuralModel & model, const uuid & surface_id, const OwnerPlane & plane, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces, bool dot_positive)
```


### along_plane

```cpp
public std::optional<PropagateAlongPlaneResult> along_plane(const SurfacePath & first_path)
```




