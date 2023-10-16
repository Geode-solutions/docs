# struct uuid


 128-bit basic UUID type that allows comparison and sorting.



## Members

```cpp
public uint64_t ab

```

```cpp
public uint64_t cd

```



## Functions

### uuid

```cpp
public void uuid()
```


### uuid

```cpp
public void uuid(string_view string)
```


### uuid

```cpp
public void uuid(const uuid & )
```


### uuid

```cpp
public void uuid(uuid && )
```


### operator=

```cpp
public uuid & operator=(uuid && other)
```


### operator=

```cpp
public uuid & operator=(const uuid & other)
```


### ~uuid

```cpp
public void ~uuid()
```


### operator==

```cpp
public bool operator==(const uuid & other)
```


### operator!=

```cpp
public bool operator!=(const uuid & other)
```


### operator<

```cpp
public bool operator<(const uuid & other)
```


### string

```cpp
public basic_string string()
```




