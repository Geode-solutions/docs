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

# class TriangulatedSurfacePointFunction


# class TriangulatedSurfacePointFunction


# class TriangulatedSurfacePointFunction


# class TriangulatedSurfacePointFunction


# class TriangulatedSurfacePointFunction


## Functions

### TriangulatedSurfacePointFunction

```cpp
public void TriangulatedSurfacePointFunction<dimension, point_dimension>(TriangulatedSurfacePointFunction<dimension, point_dimension> && other)
```


### ~TriangulatedSurfacePointFunction

```cpp
public void ~TriangulatedSurfacePointFunction<dimension, point_dimension>()
```


### create

```cpp
public TriangulatedSurfacePointFunction create(const TriangulatedSurface<dimension> & solid, basic_string_view function_name, Point<point_dimension> value)
```


 Create a new object function from a TriangulatedSurface, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public TriangulatedSurfacePointFunction find(const TriangulatedSurface<dimension> & solid, basic_string_view function_name)
```


 Finds an object function that already exists in the given TriangulatedSurface, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(index_t vertex_index, Point<point_dimension> value)
```


### value

```cpp
public const Point<point_dimension> & value(index_t vertex_index)
```


### value

```cpp
public Point<point_dimension> value(const Point<dimension> & point, index_t tetrahedron_id)
```




# class TriangulatedSurfacePointFunction


