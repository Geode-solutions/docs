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

# namespace geode



## Namespaces

* [internal](internal/index.md)


## Records

* [FieldLines](FieldLines.md)
* [FrameFieldParameterization](FrameFieldParameterization.md)
* [FrameFieldSmoother](FrameFieldSmoother.md)
* [FrameField](FrameField.md)
* [HybridBRepLibrary](HybridBRepLibrary.md)
* [HybridFrameFieldLibrary](HybridFrameFieldLibrary.md)
* [MeshElement](MeshElement.md)
* [uuid](uuid.md)


## Functions

### hex_dominant_remesh

```cpp
void hex_dominant_remesh(BRep & brep, const Metric3D & metric)
```


### hex_dominant_remesh_following_attribute

```cpp
void hex_dominant_remesh_following_attribute(BRep & brep, const Metric3D & metric, basic_string_view attribute_name)
```




