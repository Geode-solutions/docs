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

# class LinesBuilder


## Functions

### create_line

```cpp
protected const uuid & create_line()
```


### LinesBuilder

```cpp
protected void LinesBuilder<dimension>(Lines<dimension> & lines)
```


### load_lines

```cpp
public void load_lines(std::string_view directory)
```


### line_mesh_builder

```cpp
public std::unique_ptr<EdgedCurveBuilder<dimension>> line_mesh_builder(const Line<dimension> & line)
```


 Get a pointer to the builder of a Line mesh

**line** [in] Line component to get the builder of

### set_line_name

```cpp
public void set_line_name(const Line<dimension> & line, std::string_view name)
```


### set_line_active

```cpp
public void set_line_active(const Line<dimension> & line, bool active)
```


### steal_line_mesh

```cpp
public std::unique_ptr<EdgedCurve<dimension>> steal_line_mesh(const Line<dimension> & line)
```


### create_line

```cpp
protected const uuid & create_line(const MeshImpl & impl)
```


### create_line

```cpp
protected void create_line(uuid line_id)
```


### create_line

```cpp
protected void create_line(uuid line_id, const MeshImpl & impl)
```


### delete_line

```cpp
protected void delete_line(const Line<dimension> & line)
```


### set_line_mesh

```cpp
protected void set_line_mesh(const uuid & id, std::unique_ptr<EdgedCurve<dimension>> mesh)
```


### modifiable_line_mesh

```cpp
protected EdgedCurve<dimension> & modifiable_line_mesh(const uuid & id)
```




# class LinesBuilder


# class LinesBuilder


