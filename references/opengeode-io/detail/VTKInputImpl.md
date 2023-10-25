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


### read_file

```cpp
public void read_file()
```


### VTKInputImpl

```cpp
public void VTKInputImpl<Mesh>(string_view filename, Mesh & mesh, const char * type)
```


### mesh

```cpp
protected const Mesh & mesh()
```


### builder

```cpp
protected MeshBuilder & builder()
```


### match

```cpp
protected bool match(string_view query, string_view ref)
```


### read_attribute

```cpp
protected index_t read_attribute(const pugi::xml_node & piece, string_view attribute)
```


### read_integer_data_array

```cpp
protected int read_integer_data_array(const pugi::xml_node & data)
```


### read_uint8_data_array

```cpp
protected int read_uint8_data_array(const pugi::xml_node & data)
```


### read_float_data_array

```cpp
protected int read_float_data_array(const pugi::xml_node & data)
```


### cast_to

```cpp
protected int cast_to(absl::Span<const In> values)
```


### build_attribute

```cpp
protected void build_attribute(AttributeManager & manager, string_view name, absl::Span<const T> values, index_t nb_components, index_t offset)
```


### read_attribute_data

```cpp
protected void read_attribute_data(const pugi::xml_node & data, index_t offset, AttributeManager & attribute_manager)
```


### read_point_data

```cpp
protected void read_point_data(const pugi::xml_node & point_data, index_t offset)
```


### read_appended_data

```cpp
protected string_view read_appended_data(const pugi::xml_node & data)
```


### decode

```cpp
protected int decode(string_view input)
```




