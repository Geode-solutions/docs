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

# class CornersLinesIdentifier


```cpp
Inherits from detail::CornersLinesBuilder<class geode::Section>
```



# class CornersLinesIdentifier


```cpp
Inherits from detail::CornersLinesBuilder<class geode::BRep>
```



# class CornersLinesIdentifier


```cpp
Inherits from detail::CornersLinesBuilder<Model>
```



## Functions

### CornersLinesIdentifier

```cpp
public void CornersLinesIdentifier<Model>(Model & model, bool merge_components_if_no_boundaries)
```


### ~CornersLinesIdentifier

```cpp
public void ~CornersLinesIdentifier<Model>()
```


### build_unique_edges_inventory

```cpp
public void build_unique_edges_inventory()
```


### identify_corners_and_lines

```cpp
public void identify_corners_and_lines(absl::Span<const uuid> initial_corner_ids, absl::Span<const uuid> initial_line_ids)
```


### should_be_corner

```cpp
protected bool should_be_corner(index_t wireframe_vertex_id)
```


### model_builder

```cpp
protected typename Model::Builder & model_builder()
```


### mappings

```cpp
protected typename geode::TypedModelMappings<Model>::type & mappings()
```


### steal_mappings

```cpp
protected typename geode::TypedModelMappings<Model>::type && steal_mappings()
```


### merge_lines_not_bounded_by_corners

```cpp
protected void merge_lines_not_bounded_by_corners(absl::Span<const uuid> initial_line_ids)
```


### split_lines_by_corners

```cpp
protected void split_lines_by_corners(absl::Span<const uuid> initial_line_ids, absl::Span<const uuid> input_lines)
```




