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
public void SimplicialModelCreator<Model>(Model & model, std::vector<Point<dimension> > unique_points)
```


### create_corners

```cpp
public vector create_corners(Span definitions)
```


### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
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




