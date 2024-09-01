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
public void Line<>(const Line<> & )
```


### operator=

```cpp
public Line<> & operator=(const Line<> & )
```


### Line

```cpp
public void Line<>(Line<> && other)
```


### ~Line

```cpp
public void ~Line<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### mesh

```cpp
public const Mesh & mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesKey key)
```


### Line

```cpp
public void Line<>(LinesKey key)
```


### Line

```cpp
public void Line<>(const MeshImpl & impl, LinesKey key)
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
public void set_line_name(basic_string_view name, LinesBuilderKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesBuilderKey key)
```




# class Line


```cpp
Inherits from Component<2U>
```



