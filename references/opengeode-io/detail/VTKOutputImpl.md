# class VTKOutputImpl


## Functions

### write_file

```cpp
```cpp
public void write_file()
```
```


### VTKOutputImpl

```cpp
```cpp
protected void VTKOutputImpl<Mesh>(string_view filename, const Mesh & mesh, const char * type)
```
```


### ~VTKOutputImpl

```cpp
```cpp
protected void ~VTKOutputImpl<Mesh>()
```
```


### mesh

```cpp
```cpp
protected const Mesh & mesh()
```
```


### filename

```cpp
```cpp
protected string_view filename()
```
```


### write_attributes

```cpp
```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager)
```
```


### write_attributes

```cpp
```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager, Span elements)
```
```


### write_attribute_header

```cpp
```cpp
protected xml_node write_attribute_header(pugi::xml_node & attribute_node, string_view name, local_index_t nb_components)
```
```



