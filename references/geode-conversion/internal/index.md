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

# namespace internal



## Records

* [ModelBuilderFromUniqueVertices](ModelBuilderFromUniqueVertices.md)


## Functions

### point_set_on_lines_sharp_vertices

```cpp
std::unique_ptr<PointSet<dimension> > point_set_on_lines_sharp_vertices(absl::Span<const std::unique_ptr<EdgedCurve<dimension> > > lines, double max_angle)
```


### model_component_meshes_with_updated_id

```cpp
std::vector<std::unique_ptr<Mesh> > model_component_meshes_with_updated_id(const ComponentRange & range)
```


### ref_meshes

```cpp
std::vector<std::reference_wrapper<const Mesh> > ref_meshes(absl::Span<const std::unique_ptr<Mesh> > meshes)
```




