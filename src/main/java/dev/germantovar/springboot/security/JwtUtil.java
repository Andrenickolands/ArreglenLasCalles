package dev.germantovar.springboot.security;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Valores internos, hardcodeados en la librería
    private final String secretKey = "bGEyM2R4MmNobmYxZGZ8kMGk5kngPjbx6X8yqg22sXrUQk";
    private final long timeExpiration = 604800000L; // 7 días en milisegundos

    // Generar el token JWT
    public String generarToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + timeExpiration))
                .signWith(getSignatureKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Extraer el nombre de usuario del token
    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    // Validar el token (usuario y expiración)
    public boolean validateToken(String token, String username) {
        String extractedUsername = extractUsername(token);
        return extractedUsername.equals(username) && !isTokenExpired(token);
    }

    // Validar solo el token (sin username)
    public boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

    // Verificar si el token ha expirado
    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    // Obtener las reclamaciones del token
    private Claims getClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(getSignatureKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (JwtException | IllegalArgumentException e) {
            throw new RuntimeException("Token inválido o expirado", e);
        }
    }

    // Obtener la clave de firma
    private Key getSignatureKey() {
        byte[] keyBytes = secretKey.getBytes();
        return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
    }
}