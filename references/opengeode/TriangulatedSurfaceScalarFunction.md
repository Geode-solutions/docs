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

# class TriangulatedSurfaceScalarFunction

# class TriangulatedSurfaceScalarFunction

# class TriangulatedSurfaceScalarFunction


## Records

Impl



## Functions

### TriangulatedSurfaceScalarFunction

```cpp
public void TriangulatedSurfaceScalarFunction<dimension>(TriangulatedSurfaceScalarFunction<dimension> && other)
```


### ~TriangulatedSurfaceScalarFunction

```cpp
public void ~TriangulatedSurfaceScalarFunction<dimension>()
```


### create

```cpp
public TriangulatedSurfaceScalarFunction create(const TriangulatedSurface<dimension> & solid, string_view function_name, double value)
```


 Create a new object function from a TriangulatedSurface, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public TriangulatedSurfaceScalarFunction find(const TriangulatedSurface<dimension> & solid, string_view function_name)
```


 Finds an object function that already exists in the given TriangulatedSurface, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(index_t vertex_index, double value)
```


### value

```cpp
public double value(index_t vertex_index)
```


### value

```cpp
public double value(const Point<dimension> & point, index_t tetrahedron_id)
```




