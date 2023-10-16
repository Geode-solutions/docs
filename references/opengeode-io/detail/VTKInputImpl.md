# class VTKInputImpl

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#46
```

## Functions

### ~VTKInputImpl

```cpp
public void ~VTKInputImpl<Mesh>()
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#51
```

### read_file

```cpp
public void read_file()
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#53
```

### VTKInputImpl

```cpp
public void VTKInputImpl<Mesh>(string_view filename, Mesh & mesh, const char * type)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#64
```

### mesh

```cpp
protected const Mesh & mesh()
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#80
```

### builder

```cpp
protected MeshBuilder & builder()
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#85
```

### match

```cpp
protected bool match(string_view query, string_view ref)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#90
```

### read_attribute

```cpp
protected index_t read_attribute(const pugi::xml_node & piece, string_view attribute)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#96
```

### read_integer_data_array

```cpp
protected int read_integer_data_array(const pugi::xml_node & data)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#109
```

### read_uint8_data_array

```cpp
protected int read_uint8_data_array(const pugi::xml_node & data)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#132
```

### read_float_data_array

```cpp
protected int read_float_data_array(const pugi::xml_node & data)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#154
```

### cast_to

```cpp
protected int cast_to(absl::Span<const In> values)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#176
```

### build_attribute

```cpp
protected void build_attribute(AttributeManager & manager, string_view name, absl::Span<const T> values, index_t nb_components, index_t offset)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#187
```

### read_attribute_data

```cpp
protected void read_attribute_data(const pugi::xml_node & data, index_t offset, AttributeManager & attribute_manager)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#229
```

### read_point_data

```cpp
protected void read_point_data(const pugi::xml_node & point_data, index_t offset)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#302
```

### read_appended_data

```cpp
protected string_view read_appended_data(const pugi::xml_node & data)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#312
```

### decode

```cpp
protected int decode(string_view input)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_input.h#319
```



