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

# class InsertedVertices


## Functions

### InsertedVertices

```cpp
public void InsertedVertices<Component>(const InsertedVertices<Component> & )
```


### InsertedVertices

```cpp
public void InsertedVertices<Component>(InsertedVertices<Component> && )
```


### operator=

```cpp
public InsertedVertices<Component> & operator=(const InsertedVertices<Component> & )
```


### operator=

```cpp
public InsertedVertices<Component> & operator=(InsertedVertices<Component> && )
```


### InsertedVertices

```cpp
public void InsertedVertices<Component>(BRepHybridSamplingData & data, const Component & hybrid_component, const Component & component)
```


### ~InsertedVertices

```cpp
public void ~InsertedVertices<Component>()
```


### filter_points

```cpp
public std::tuple<std::vector<Point3D>, std::vector<index_t>> filter_points(const FrameFieldParameterization::ExtractedElements::Vertex2ElementMapping::Storage<index_t> & vertex2element_mapping)
```


### update_mapping

```cpp
public void update_mapping(absl::Span<const index_t> vertex_ids, absl::Span<const index_t> new_vertices)
```


### result

```cpp
public absl::FixedArray<index_t> result()
```




