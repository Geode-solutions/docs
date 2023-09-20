# class ComponentsStorage


## Functions

### nb_components

```cpp
public index_t nb_components()
```


### has_component

```cpp
public _Bool has_component(const uuid & id)
```


### component

```cpp
public const Component & component(const uuid & id)
```


### component

```cpp
public Component & component(const uuid & id)
```


### begin

```cpp
public Iterator begin()
```


### end

```cpp
public Iterator end()
```


### add_component

```cpp
public void add_component(ComponentPtr component)
```


### save_components

```cpp
public void save_components(string_view filename)
```


### delete_component

```cpp
public void delete_component(const uuid & id)
```


### load_components

```cpp
public void load_components(string_view filename)
```


### file_mapping

```cpp
public flat_hash_map file_mapping(string_view directory)
```




