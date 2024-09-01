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

# class FrameFieldSmoother


## Functions

### FrameFieldSmoother

```cpp
public void FrameFieldSmoother(FrameField & frame_field)
```


### ~FrameFieldSmoother

```cpp
public void ~FrameFieldSmoother()
```


### add_brep_constraint

```cpp
public void add_brep_constraint(double weight)
```


### add_lines_constraint

```cpp
public void add_lines_constraint(double weight)
```


### add_surfaces_constraint

```cpp
public void add_surfaces_constraint(double weight)
```


### add_line_constraint

```cpp
public void add_line_constraint(const Line3D & line, double weight)
```


### add_surface_constraint

```cpp
public void add_surface_constraint(const Surface3D & surface, double weight)
```


### add_line_vertex_constraint

```cpp
public void add_line_vertex_constraint(const Line3D & line, index_t vertex, double weight)
```


### add_surface_vertex_constraint

```cpp
public void add_surface_vertex_constraint(const Surface3D & surface, index_t vertex, double weight)
```


### add_gradient_constraint

```cpp
public void add_gradient_constraint(basic_string_view attribute_name, double weight)
```


### smooth_frame_field

```cpp
public void smooth_frame_field()
```




