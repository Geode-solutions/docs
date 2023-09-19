# class VTKInputImpl


## Functions

### ~VTKInputImpl

```cpp
```cpp
public void ~VTKInputImpl<Mesh>()
```
```


### read_file

```cpp
```cpp
public void read_file()
```
```


### VTKInputImpl

```cpp
```cpp
public void VTKInputImpl<Mesh>(string_view filename, Mesh & mesh, const char * type)
```
```


### mesh

```cpp
```cpp
protected const Mesh & mesh()
```
```


### builder

```cpp
```cpp
protected MeshBuilder & builder()
```
```


### match

```cpp
```cpp
protected _Bool match(string_view query, string_view ref)
```
```


### read_attribute

```cpp
```cpp
protected index_t read_attribute(const pugi::xml_node & piece, string_view attribute)
```
```


### read_integer_data_array

```cpp
```cpp
protected int read_integer_data_array(const pugi::xml_node & data)
```
```


### read_uint8_data_array

```cpp
```cpp
protected int read_uint8_data_array(const pugi::xml_node & data)
```
```


### read_float_data_array

```cpp
```cpp
protected int read_float_data_array(const pugi::xml_node & data)
```
```


### cast_to

```cpp
```cpp
protected int cast_to(absl::Span<const In> values)
```
```


### build_attribute

```cpp
```cpp
protected void build_attribute(AttributeManager & manager, string_view name, absl::Span<const T> values, index_t nb_components, index_t offset)
```
```


### read_attribute_data

```cpp
```cpp
protected void read_attribute_data(const pugi::xml_node & data, index_t offset, AttributeManager & attribute_manager)
```
```


### read_point_data

```cpp
```cpp
protected void read_point_data(const pugi::xml_node & point_data, index_t offset)
```
```


### read_appended_data

```cpp
```cpp
protected string_view read_appended_data(const pugi::xml_node & data)
```
```


### decode

```cpp
```cpp
protected int decode(string_view input)
```
```




