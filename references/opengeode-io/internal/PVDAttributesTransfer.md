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

# class PVDAttributesTransfer


## Functions

### PVDAttributesTransfer

```cpp
public void PVDAttributesTransfer(absl::Span<const std::string_view> ignored_attributes)
```


### write_step

```cpp
public void write_step(double time, absl::Span<const std::unique_ptr<SolidMesh3D>> meshes, const PVDPointSets & point_sets)
```


 Write the attributes of all the datasets of a time step (e.g. one per GEOS region and per MPI rank) as time step attributes of the time series point sets (unique vertices and cell barycenters). Attributes sharing a name across the datasets are merged into a single time step attribute.

**warning** The attributes of the given meshes are modified: those sharing a name are given the same id.



