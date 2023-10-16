# class VTKOutputImpl

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#39
```

## Functions

### write_file

```cpp
public void write_file()
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#42
```

### VTKOutputImpl

```cpp
protected void VTKOutputImpl<Mesh>(string_view filename, const Mesh & mesh, const char * type)
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#50
```

### ~VTKOutputImpl

```cpp
protected void ~VTKOutputImpl<Mesh>()
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#61
```

### mesh

```cpp
protected const Mesh & mesh()
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#63
```

### filename

```cpp
protected string_view filename()
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#68
```

### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager)
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#73
```

### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager, Span elements)
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#81
```

### write_attribute_header

```cpp
protected xml_node write_attribute_header(pugi::xml_node & attribute_node, string_view name, local_index_t nb_components)
```

```cpp
Defined at ../../include/geode/io/image/private/vtk_output.h#115
```



