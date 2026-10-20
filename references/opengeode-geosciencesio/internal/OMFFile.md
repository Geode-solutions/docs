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

# class OMFFile


 Reader of Open Mining Format v1 files (binary layout written by the omf Python package 1.x, version string "OMF-v0.9.0"). The file starts with a 60 bytes header (magic number, version, project uuid, JSON start), followed by zlib compressed arrays and ends with a JSON index of all the objects keyed by uuid.



## Members

```cpp
public static const auto EXTENSION

```

```cpp
public static const auto OMF_ELEMENT_ATTRIBUTE_NAME

```



## Functions

### OMFFile

```cpp
public void OMFFile(std::string_view filename)
```


### is_loadable

```cpp
public static Percentage is_loadable(std::string_view filename, std::string_view element_class, std::string_view geometry_class)
```


 Fraction of the project elements of an OMF v1 file having the given class (and geometry class if not empty), 0 if the file is not an OMF v1 file

### is_loadable

```cpp
public static Percentage is_loadable(std::string_view filename, absl::FunctionRef<std::size_t (const OMFFile &)> nb_loadable_elements)
```


 Fraction of the project elements of an OMF v1 file that a reader loads, 0 if the file is not an OMF v1 file

**nb_loadable_elements** [in] Number of elements the reader loads

### nb_elements

```cpp
public std::size_t nb_elements()
```


 Number of project elements present in the file

### project_name

```cpp
public std::string_view project_name()
```


### elements

```cpp
public std::vector<const nlohmann::json *> elements(std::string_view element_class, std::string_view geometry_class)
```


 Elements of the project with the given class (and geometry class if not empty), in the project order

### object

```cpp
public const nlohmann::json & object(const nlohmann::json & uid)
```


### geometry

```cpp
public const nlohmann::json & geometry(const nlohmann::json & element)
```


### name

```cpp
public static std::string_view name(const nlohmann::json & object)
```


### mesh_name

```cpp
public std::string_view mesh_name(absl::Span<const nlohmann::json *const> elements)
```


 Name of the element if there is only one, project name otherwise

### read_tensor

```cpp
public static std::vector<double> read_tensor(const nlohmann::json & geometry, std::string_view key)
```


 Read an inline grid tensor (cell sizes along one axis)

### axis

```cpp
public static Vector3D axis(const nlohmann::json & geometry, std::string_view key, local_index_t default_axis)
```


 Read a grid axis, normalized

### origin

```cpp
public Vector3D origin(const nlohmann::json & geometry)
```


 Project origin plus geometry origin

### read_points

```cpp
public std::vector<Point3D> read_points(const nlohmann::json & geometry, std::string_view key)
```


 Read the Vector3Array referenced by geometry[key] and translate the points by the geometry origin

### read_elements

```cpp
public std::vector<std::array<index_t, nb_vertices_per_element>> read_elements(const nlohmann::json & geometry, std::string_view key, index_t nb_vertices)
```


 Read the Int2Array/Int3Array referenced by geometry[key]. Elements referencing a vertex outside [0, nb_vertices) are filled with NO_ID and reported with a warning.

### read_optional_scalars

```cpp
public std::vector<double> read_optional_scalars(const nlohmann::json & geometry, std::string_view key)
```


 Read the ScalarArray referenced by geometry[key], or an empty vector if there is no such array

### read_data

```cpp
public void read_data(const nlohmann::json & element, std::string_view location, index_t nb_values, AttributeManager & manager, absl::FunctionRef<index_t (index_t)> attribute_element)
```


 Create attributes in the manager for all element data defined at the given location.

**nb_values** [in] Number of values expected for this location.

**attribute_element** [in] Index in the manager of the i-th value, NO_ID to skip this value.

### read_scalars

```cpp
public std::vector<double> read_scalars(const nlohmann::json & array)
```


### read_integers

```cpp
public std::vector<int64_t> read_integers(const nlohmann::json & array)
```




