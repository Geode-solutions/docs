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

# class SimplicialModelCreator


## Functions

### SimplicialModelCreator

```cpp
public void SimplicialModelCreator<Model>(Model & model, std::vector<Point<dimension>> unique_points)
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


### check_index

```cpp
protected void check_index(index_t index, std::size_t size, std::string_view element)
```


### find_corner

```cpp
protected uuid find_corner(const absl::flat_hash_set<uuid> & corners, index_t vertex)
```


### check_unique_point

```cpp
protected void check_unique_point(index_t vertex)
```


### check_simplices

```cpp
protected void check_simplices(absl::Span<const index_t> vertices, absl::Span<const index_t> simplices, index_t nb_simplex_vertices, std::string_view simplex_name)
```


### create_point

```cpp
protected void create_point(MeshBuilder & mesh_builder, const Component & component, index_t vertex)
```


### model

```cpp
protected const Model & model()
```


### builder

```cpp
protected ModelBuilder & builder()
```




