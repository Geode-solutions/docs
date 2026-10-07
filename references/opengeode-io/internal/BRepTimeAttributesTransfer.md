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

# class BRepTimeAttributesTransfer


## Functions

### BRepTimeAttributesTransfer

```cpp
public void BRepTimeAttributesTransfer(BRep & brep, absl::Span<const std::string_view> ignored_attributes)
```


### write_step

```cpp
public void write_step(double time, const SolidMesh3D & mesh, const SolidToBlocksMappings & mappings)
```




