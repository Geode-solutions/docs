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

# class SimplicialBRepCreator


## Functions

### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, std::vector<Point3D> unique_points)
```


### ~SimplicialBRepCreator

```cpp
public void ~SimplicialBRepCreator()
```


### create_corners

```cpp
public std::vector<uuid> create_corners(absl::Span<const CornerDefinition> definitions)
```


### create_lines

```cpp
public std::vector<uuid> create_lines(absl::Span<const uuid> corners, absl::Span<const LineDefinition> definitions)
```


### create_surfaces

```cpp
public std::vector<uuid> create_surfaces(absl::Span<const uuid> lines, absl::Span<const SurfaceDefinition> definitions)
```


### create_surfaces

```cpp
public std::vector<uuid> create_surfaces(absl::Span<const uuid> corners, absl::Span<const uuid> lines, absl::Span<const SurfaceDefinition> definitions)
```


### create_blocks

```cpp
public std::vector<uuid> create_blocks(absl::Span<const uuid> surfaces, absl::Span<const BlockDefinition> definitions)
```


### create_blocks

```cpp
public std::vector<uuid> create_blocks(absl::Span<const uuid> corners, absl::Span<const uuid> lines, absl::Span<const uuid> surfaces, absl::Span<const BlockDefinition> definitions)
```


### create_model_boundaries

```cpp
public std::vector<uuid> create_model_boundaries(absl::Span<const uuid> surfaces, absl::Span<const BoundaryDefinition> definitions)
```




