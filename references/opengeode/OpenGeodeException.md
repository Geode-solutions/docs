# class OpenGeodeException

```cpp
Defined at ../../include/geode/basic/assert.h#50
```

 OpenGeode exception class. Example:       throw OpenGeodeException{ "Error while loading the BRep" };

       try {          ...       }       catch( ... )       {           return geode_lippincott();       }



```cpp
Inherits from runtime_error
```



## Functions

### OpenGeodeException

```cpp
public void OpenGeodeException(const Args &... message)
```

```cpp
Defined at ../../include/geode/basic/assert.h#54
```

### ~OpenGeodeException

```cpp
public void ~OpenGeodeException()
```

```cpp
Defined at ../../include/geode/basic/assert.h#58
```



