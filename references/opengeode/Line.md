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

# class Line


```cpp
Inherits from Component<3U>
```



# class Line


 Geometric component describing a Line. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Line

```cpp
public void Line<value-parameter-0-0>(const Line<dimension> & )
```


### operator=

```cpp
public Line<dimension> & operator=(const Line<dimension> & )
```


### Line

```cpp
public void Line<value-parameter-0-0>(Line<dimension> && other)
```


### ~Line

```cpp
public void ~Line<value-parameter-0-0>()
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### component_type

```cpp
public ComponentType component_type()
```


### mesh

```cpp
public const Mesh & mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### Line

```cpp
public void Line<value-parameter-0-0>(LinesKey key)
```


### Line

```cpp
public void Line<value-parameter-0-0>(const MeshImpl & impl, LinesKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesBuilderKey key)
```


### set_line_name

```cpp
public void set_line_name(std::string_view name, LinesBuilderKey key)
```


### set_line_active

```cpp
public void set_line_active(bool is_active, LinesBuilderKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesBuilderKey key)
```


### steal_mesh

```cpp
public std::unique_ptr<Mesh> steal_mesh(LinesBuilderKey key)
```




# class Line


```cpp
Inherits from Component<2U>
```



