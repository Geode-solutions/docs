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

# class BRepTopologyRebuild


 Single-use worker: it converts the initial BRep into a solid, modifies this solid and builds the new BRep from it. A new worker is created for each rebuild, so that every rebuild starts from the initial BRep.



## Functions

### BRepTopologyRebuild

```cpp
public void BRepTopologyRebuild(const BRep & model, absl::Span<const AdditionalBlockFacets> additional_facets, absl::Span<const uuid> non_conformal_surfaces)
```


### rebuild

```cpp
public std::tuple<BRep, ModelMappings> rebuild()
```




