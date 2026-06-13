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

# class VTKInputImpl


## Functions

### ~VTKInputImpl

```cpp
public void ~VTKInputImpl<Mesh>()
```


### initialize_mesh

```cpp
protected void initialize_mesh(std::unique_ptr<Mesh> && mesh)
```


### is_vtk_object_loadable

```cpp
protected void is_vtk_object_loadable(const pugi::xml_node & vtk_object, std::vector<Percentage> & percentages)
```

### read_file

```cpp
public std::unique_ptr<Mesh> read_file()
```


### is_loadable

```cpp
public Percentage is_loadable()
```


### VTKInputImpl

```cpp
protected void VTKInputImpl<Mesh>(std::string_view filename, const char * type)
```


### read_common_data

```cpp
protected void read_common_data()
```


### mesh

```cpp
protected Mesh & mesh()
```


### match

```cpp
protected bool match(std::string_view query, std::string_view ref)
```


### read_attribute

```cpp
protected index_t read_attribute(const pugi::xml_node & piece, std::string_view attribute)
```


### read_integer_data_array

```cpp
protected std::vector<T> read_integer_data_array(const pugi::xml_node & data)
```


### read_uint8_data_array

```cpp
protected std::vector<T> read_uint8_data_array(const pugi::xml_node & data)
```


### read_float_data_array

```cpp
protected std::vector<T> read_float_data_array(const pugi::xml_node & data)
```


### cast_to

```cpp
protected std::vector<Out> cast_to(absl::Span<const In> values)
```


### build_attribute

```cpp
protected void build_attribute(AttributeManager & manager, std::string_view name, absl::Span<const T> values, index_t nb_components, index_t offset)
```


### read_attribute_data

```cpp
protected void read_attribute_data(const pugi::xml_node & data, index_t offset, AttributeManager & attribute_manager)
```


### read_data

```cpp
protected void read_data(const pugi::xml_node & point_data, index_t offset, AttributeManager & attribute_manager)
```


### read_appended_data

```cpp
protected std::string_view read_appended_data(const pugi::xml_node & data)
```


### decode

```cpp
protected std::vector<T> decode(std::string_view input)
```




